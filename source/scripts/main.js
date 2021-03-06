import noUiSlider from "noUiSlider";
import menuActions from "./utils/menuActions";
import { fillDots, DotsColorByClass } from "./utils/fillDots";
import { range } from "./utils/generateArray";

// noUI Slider
const slider = document.querySelector(".slider");

noUiSlider.create(slider, {
    start: [1920, 2019],
    connect: true,
    step: 1,
    range: {
        min: 1920,
        max: 2019
    },
    tooltips: true,
    format: {
        to: function(value) {
            return value;
        },
        from: function(value) {
            return value;
        }
    }
});

// Setup d3 geo
const projection = d3.geo
    .mercator()
    .center([-20, 45])
    .scale(260)
    .rotate([-20, 0])
    .translate([window.innerWidth / 2.1, window.innerHeight / 2.2]);

const svg = d3
    .select("#map")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

const path = d3.geo.path().projection(projection);
const g = svg.append("g");

// Rect size
const rectSizeOne = {
    w: 20,
    h: 6
};

const tooltip = d3.select(".tooltip");

// load and display the World
d3.json("js/world-110m2.json", (error, topology) => {
    g.selectAll("path")
        .data(topojson.object(topology, topology.objects.countries).geometries)
        .enter()
        .append("path")
        .attr("d", path);
});

d3.json("js/brut-data.json", (error, data) => {
    d3.select(".header__anzahl").text(`${data.length} Gebäude`);

    g.selectAll("circle")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d) {
            return projection([d.lng, d.lat])[0];
        })
        .attr("y", function(d) {
            return projection([d.lng, d.lat])[1];
        })
        .attr("width", rectSizeOne.w)
        .attr("height", rectSizeOne.h)
        .attr("class", function(d) {
            return `${fillDots(d.start_jahr)} ${d.start_jahr}-jahr`;
        })
        .on("mouseover", function(d) {
            d3.select(this).style("fill", "black");

            tooltip
                .style("display", "block")
                .style("left", d3.event.pageX + "px")
                .style("top", d3.event.pageY - 100 + "px");

            tooltip
                .select(".tooltip__vorschau__image")
                .style("background-image", `url(${d.thumbnail})`);

            tooltip.select(".tooltip__vorschau").style("display", function(e) {
                if (
                    d.thumbnail === "" ||
                    !d.thumbnail ||
                    !d.thumbnail.match(/jpg/i)
                ) {
                    return "none";
                }
            });

            tooltip.select(".tooltip__titel").text(d.titel);
            tooltip.select(".tooltip__autor").text(d.architekten);

            tooltip
                .select(".tooltip__jahr-staat")
                .text(
                    `${d.start_jahr}—${d.ende_jahr}, ${d.staat}${
                        d.stadt !== "" ? `, ${d.stadt}` : ""
                    }`
                );

            tooltip
                .select(".tooltip__status")
                .text(d.status)
                .style("background", function(e) {
                    if (d.status === "status-still-there") {
                        return "#4c475b";
                    } else if (d.status === "status-saved") {
                        return "#27d167";
                    } else if (
                        d.status === "status-danger" ||
                        d.status === "status-saved-danger"
                    ) {
                        return "#e27000";
                    } else {
                        return "#e33632";
                    }
                });
        })
        .on("mouseout", function(d) {
            tooltip.style("display", "none");
            d3.select(this)
                .transition()
                .style("fill", DotsColorByClass(this.classList))
                .duration(1000);
        });

    slider.noUiSlider.on("slide", function(values, handle) {
        g.selectAll(".city-dot").attr("display", d => {
            let displayVal = "block";

            [...range(1920, values[0]), ...range(values[1], 2020)].map(i => {
                // console.log(d.ende_jahr);
                if (d.start_jahr === i) {
                    displayVal = "none";
                }
            });

            return displayVal;
        });
    });
});

// zoom and pan
const zoom = d3.behavior.zoom().on("zoom", () => {
    // Add scale attr
    g.attr(
        "transform",
        `translate(${d3.event.translate.join(",")}) scale(${d3.event.scale})`
    );

    // Scale dots and lines to the certain scale value
    let roundScale = d3.event.scale.toFixed(2);

    if (d3.event.scale < 100 || d3.event.scale <= 0) {
        g.attr("stroke-width", 0.5 / roundScale);
        g.selectAll("rect")
            .attr("width", rectSizeOne.w / roundScale)
            .attr("height", rectSizeOne.h / roundScale);
    }
});

svg.call(zoom);

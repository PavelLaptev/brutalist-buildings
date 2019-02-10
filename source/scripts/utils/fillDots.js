export const fillDots = year => {
    if (year >= 1920 && year < 1930) {
        return "city-dot cd-1920-1930";
    } else if (year >= 1930 && year < 1935) {
        return "city-dot cd-1930-1935";
    } else if (year >= 1935 && year < 1940) {
        return "city-dot cd-1935-1940";
    } else if (year >= 1940 && year < 1945) {
        return "city-dot cd-1940-1945";
    } else if (year >= 1945 && year < 1950) {
        return "city-dot cd-1945-1950";
    } else if (year >= 1950 && year < 1955) {
        return "city-dot cd-1950-1955";
    } else if (year >= 1955 && year < 1960) {
        return "city-dot cd-1955-1960";
    } else if (year >= 1960 && year < 1965) {
        return "city-dot cd-1960-1965";
    } else if (year >= 1965 && year < 1970) {
        return "city-dot cd-1965-1970";
    } else if (year >= 1970 && year < 1975) {
        return "city-dot cd-1970-1975";
    } else if (year >= 1975 && year < 1980) {
        return "city-dot cd-1975-1980";
    } else if (year >= 1980 && year < 1985) {
        return "city-dot cd-1980-1985";
    } else if (year >= 1985 && year < 1990) {
        return "city-dot cd-1985-1990";
    } else if (year >= 1990 && year < 1995) {
        return "city-dot cd-1990-1995";
    } else if (year >= 1995 && year < 2000) {
        return "city-dot cd-1995-2000";
    } else if (year >= 2000 && year < 2005) {
        return "city-dot cd-2000-2005";
    } else if (year >= 2005 && year < 2010) {
        return "city-dot cd-2005-2010";
    } else if (year >= 2010 && year < 2015) {
        return "city-dot cd-2010-2015";
    } else if (year >= 2015) {
        return "city-dot cd-2015--";
    }
};

export const DotsColorByClass = classList => {
    if (classList.contains("cd-1920-1930")) {
        return "#ffc64c";
    } else if (classList.contains("cd-1930-1935")) {
        return "#ffbc4d";
    } else if (classList.contains("cd-1935-1940")) {
        return "#ffb251";
    } else if (classList.contains("cd-1940-1945")) {
        return "#ffa758";
    } else if (classList.contains("cd-1945-1950")) {
        return "#ff9c62";
    } else if (classList.contains("cd-1950-1955")) {
        return "#ff906e";
    } else if (classList.contains("cd-1955-1960")) {
        return "#ff857c";
    } else if (classList.contains("cd-1960-1965")) {
        return "#ff7b8b";
    } else if (classList.contains("cd-1965-1970")) {
        return "#ff729c";
    } else if (classList.contains("cd-1970-1975")) {
        return "#ff6bae";
    } else if (classList.contains("cd-1975-1980")) {
        return "#ff67c0";
    } else if (classList.contains("cd-1980-1985")) {
        return "#a459f2";
    } else if (classList.contains("cd-1985-1990")) {
        return "#7e54f8";
    } else if (classList.contains("cd-1990-1995")) {
        return "#0065e4";
    } else if (classList.contains("cd-1995-2000")) {
        return "#0077d0";
    } else if (classList.contains("cd-2000-2005")) {
        return "#0088bd";
    } else if (classList.contains("cd-2005-2010")) {
        return "#009aa9";
    } else if (classList.contains("cd-2010-2015")) {
        return "#00ab95";
    } else if (classList.contains("cd-2015--")) {
        return "#00bd82";
    }
};

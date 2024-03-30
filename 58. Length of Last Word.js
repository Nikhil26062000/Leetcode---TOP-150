var lengthOfLastWord = function(s) {
    s = s.trim().split(" ");
    let l = s.length;
    while (l > 0) {
        if (s[l - 1] !== "") {
            return s[l - 1].length;
        }
        l--;
    }
};

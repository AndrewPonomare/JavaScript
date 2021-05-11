/* You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it. */

 var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ')
};
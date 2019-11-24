
function main() {
    console.log('START');
    if (true) {
        var lang = 'vi';
        let target = 'en-us';
        console.log('inside block');
        console.log(target);
    }
    console.log(lang);
// OK
    console.log(target); // ERROR: [ts] Cannot find name 'target'.
}

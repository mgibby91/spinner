
const spinnerSigns = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];

for (let i = 0; i < spinnerSigns.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerSigns[i]);
  }, 200 * i);
}

setTimeout(() => {
  console.log();
}, spinnerSigns.length * 200 + 100);

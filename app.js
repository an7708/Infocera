    // const c = document.getElementById("canv");
    // const ctx = c.getContext("2d");

    // function resizeCanvas() {
    // const dpr = window.devicePixelRatio || 1;

    // c.width = Math.floor(window.innerWidth * dpr);
    // c.height = Math.floor(window.innerHeight * dpr);

    // c.style.width = window.innerWidth + "px";
    // c.style.height = window.innerHeight + "px";

    // ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // }

    // window.addEventListener("resize", resizeCanvas);
    // resizeCanvas();

    // function R(x, y, t) {
    // return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    // }

    // function G(x, y, t) {
    // return Math.floor(
    //     192 +
    //     64 *
    //         Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
    // );
    // }

    // function B(x, y, t) {
    // return Math.floor(
    //     192 +
    //     64 *
    //         Math.sin(
    //         5 * Math.sin(t / 9) +
    //             ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
    //         )
    // );
    // }

    // let t = 0;

    // function run() {
    // const w = window.innerWidth;
    // const h = window.innerHeight;

    // const step = 6; // quality (smaller = better)

    // for (let x = 0; x < w; x += step) {
    //     for (let y = 0; y < h; y += step) {
    //     ctx.fillStyle = `rgb(${R(x, y, t)},${G(x, y, t)},${B(x, y, t)})`;
    //     ctx.fillRect(x, y, step, step);
    //     }
    // }

    // t += 0.02;
    // requestAnimationFrame(run);
    // }

    // run();

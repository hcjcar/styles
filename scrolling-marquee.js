<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>S-Curve Scrolling Marquee</title>
  <style>
    body {
      margin: 0;
      padding: 20px;
      background: #fff;
      font-family: Arial, sans-serif;
      overflow-x: hidden;
    }

    .container {
      width: 100%;
      height: 250px;
      overflow: hidden;
      position: relative;
    }

    .curved-text-svg {
      width: 100%;
      height: 100%;
    }

    .curved-text {
      font-size: 100px;
      fill: #000;
      font-weight: bold;
      white-space: nowrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <svg class="curved-text-svg" viewBox="0 0 6000 250" preserveAspectRatio="xMidYMid meet">
      <defs>
        <path id="s-curve" d="
          M 0 150 
          Q 375 0 750 150 
          Q 1125 300 1500 150 
          Q 1875 0 2250 150 
          Q 2625 300 3000 150
          Q 3375 0 3750 150 
          Q 4125 300 4500 150 
          Q 4875 0 5250 150 
          Q 5625 300 6000 150" />
      </defs>
      <text class="curved-text">
        <textPath href="#s-curve" id="scrollingText" startOffset="0%">
🌞 Last chance to register for Summer Camps & Summer Session 2 Classes! 🌞 Join us for Splash Bash, Pickle-looza, & Community Campout! 🌞   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
🌞 Last chance to register for Summer Camps & Summer Session 2 Classes! 🌞 Join us for Splash Bash, Pickle-looza, & Community Campout! 🌞
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
🌞 Last chance to register for Summer Camps & Summer Session 2 Classes! 🌞 Join us for Splash Bash, Pickle-looza, & Community Campout! 🌞
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </textPath>
      </text>
    </svg>
  </div>

  <script>
    const textPath = document.getElementById("scrollingText");
    let offset = 0;

    function scroll() {
      offset -= 0.09; 
      if (offset < -100) offset = 0;
      textPath.setAttribute("startOffset", `${offset}%`);
      requestAnimationFrame(scroll);
    }

    requestAnimationFrame(scroll);
  </script>
</body>
</html>

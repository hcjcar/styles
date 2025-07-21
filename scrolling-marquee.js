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

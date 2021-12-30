registerPaint("shapes" ,class Shapes {

    paint(ctx, size, props) {
      const width = size.width;
      const height = size.height;
      const blockSize = 100;

      const drawCircle = (horizontalStart, verticalStart, blockSize) => {
        ctx.beginPath();
        ctx.arc(
          horizontalStart + blockSize / 4,
          verticalStart + blockSize / 3,
          blockSize / 7,
          50,
          0,
          2 * Math.PI
        );
        ctx.stroke();
      };

      const drawRect = (horizontalStart, verticalStart, blockSize) => {
        ctx.strokeStyle = "white";
        ctx.strokeRect(
          horizontalStart + blockSize / 8,
          verticalStart + blockSize / 8,
          blockSize / 4,
          blockSize / 4
        );
      };

      const draw = () => {
        const verticalBlockCount = height / blockSize;
        const horizontalBlockCount = width / blockSize;

        for (let i = 0; i < horizontalBlockCount; i++) {
          const horizontalStartingPoint = i * blockSize;

          const horizontalRemainder = i % 2;

          for (let y = 0; y < verticalBlockCount; y++) {
            const verticalStartingPoint = y * blockSize;
            const verticalRemainder = y % 2;

            if (horizontalRemainder == 1 && verticalRemainder == 1)
              drawCircle(
                horizontalStartingPoint,
                verticalStartingPoint,
                blockSize
              );
            if (horizontalRemainder == 0 && verticalRemainder == 0)
              drawRect(
                horizontalStartingPoint,
                verticalStartingPoint,
                blockSize
              );
          }
        }
      };

      draw();
    }
  }
);

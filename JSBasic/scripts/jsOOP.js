function APoint() {
        this.className = "route-box ";
        this.time = "";
        this.airport = "";
        this.airline = "";
        this.seatClass = "";
      }

let infoArrayPerSeg = [new APoint(), new APoint()];
infoArrayPerSeg[0].time = "1234";
console.log(infoArrayPerSeg[0].time);
console.log(infoArrayPerSeg[1].time);

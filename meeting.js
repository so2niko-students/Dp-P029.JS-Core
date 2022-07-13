function meeting(room, need) {
    let takenChairs = [];
    if (!need) return "Game On";
    for (let [used, chairs] of room) {
      chairs = Math.min(need, Math.max(0, chairs - used.length));
    //   let freeChairs = chairs - used.length;//5 - 5, 5 - 3, 5 - 8 //! 3
    //   if(freeChairs < 0){
    //     freeChairs = 0;
    //   }
    //   if(freeChairs > need){
    //     freeChairs = need;
    //   }
      takenChairs.push(chairs);
      need -= chairs;
      if (!need) return takenChairs;
    }
    return "Not enough!";
  }
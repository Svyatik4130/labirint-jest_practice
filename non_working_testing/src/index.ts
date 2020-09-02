export function minWalk(gridList: string[], startX: number, startY: number, endX: number, endY: number):string {
    let bombCoords:number[] = [];
    for (let x = 0; x < gridList.length; x++){
        gridList[x].split('').forEach((_bomb:string, index:number) => {
            if(_bomb === "X"){
                return bombCoords.push(Number(`${x}.${index}`));
            }
        });
    }
    for(var x = 0; Number(`${startX}.${startY}`) !== Number(`${endX}.${endY}`); x++){
        if(bombCoords.includes(Number(`${startX}.${startY}`))){
            return `Ваша фигура попала на "Х". Количесвто ходов: ${x}`
        }
        if(startX < endX){
            startX++;
        }else if(startX > endX){
            startX--;
        }
        if(startY < endY){
            startY++;
        }else if(startY > endY){
            startY--;
        }
        console.log(Number(`${startX}.${startY}`));
    }
    if(bombCoords.includes(Number(`${startX}.${startY}`))){
        return `Ваша фигура попала на "Х". Количесвто ходов: ${x}`
    } else {
        return `Ваша фигура прошла весь путь к точке назначения и не попала на "Х". Количество ходов:${x}`;
    }
}

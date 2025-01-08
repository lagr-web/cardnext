interface Enemy {

    name:string;
    img:string;
    text:string
}

 type EnemyArray = Enemy[];


interface Data {
    name: string;
    img: string;
    information: {
        strength: number;
        lives: number;
    };

    text: string;
}

interface DataList {
    content: Data[];
}
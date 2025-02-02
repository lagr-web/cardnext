export interface Enemy {

    name:string;
    img:string;
    text:string
}

export type EnemyArray = Enemy[];


export interface Data {
    name: string;
    img: string;
    information: {
        strength: number;
        lives: number;
    };

    text: string;
}

export interface DataList {
    content: Data[];
}
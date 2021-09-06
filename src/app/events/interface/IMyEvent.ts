export interface MyEvent {
    id: number;
    name: string;
    //date: Date,
    // time: string,
    // price: number,
    // imageUrl: string,
    //location: Location
    //sessions: Array<Session>
}

export interface Location {
    address: string,
    city: string,
    country: string
}

export interface Session {
    id: number,
    name: string,
    presenter: string,
    duration: number,
    level: string,
    abstract: string,
    voters: Array<string>
}
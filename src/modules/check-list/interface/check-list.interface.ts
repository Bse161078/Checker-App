export interface ITopQuestion {
    title: string;
    value: boolean;
    samplePhoto: string;
}
export interface IComments {
    title: string;
    value: boolean;
    photos: string[];
}
export interface IDamageReport {
    text: string;
    photos: string[];
}
export interface ICommentValue {
    status: string;
    photos: string[];
}
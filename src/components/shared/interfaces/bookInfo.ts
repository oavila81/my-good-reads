export default interface IBookInfo {
    id: string;
    imageSrc?: string; 
    title: string; 
    authors?: string[]; 
    description?: string; 
    publicatedBy?: string; 
    publicated?: Date;
}
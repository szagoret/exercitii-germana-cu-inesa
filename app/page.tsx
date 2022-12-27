import Content from "app/components/Content";

async function getData() {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
}

export default async function Home() {
    const {products}: { products: Array<{ id: number, title: string, description: string }> } = await getData();
    return (<Content products={products}/>)
}
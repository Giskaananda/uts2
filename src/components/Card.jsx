import fm1Image from '../foto.jpg';
import fm2Image from '../pricelist.jpg';
import fm3Image from '../percetakan.jpeg';
import fm4Image from '../cetak foto.jpeg';
import fm5Image from '../list data.png';
import fm6Image from '../undangan.jpg';


const Card = ({ title, description, imageUrl }) => {
    return (
    <div id='news' className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    </div>
);
};
const CardList = () => {
const concert = [
    {
    title: 'FOTO',
    description: 'Melayani Foto Pernikahan dengan Harga yang Fleksibel',
    imageUrl: fm1Image,
},
{
    title: 'PRICELIST ',
    description: 'Harga Paket Foto ',
    imageUrl: fm2Image,
},
{
    title: 'PERCETAKAN DAN FOTOCOPY',
    description: 'Bisa melayani percetkan dan fotocopy ',
    imageUrl: fm3Image,
},
{
    title: 'EDITING FOTO',
    description: 'Melayani Editing Foto dll',
    imageUrl: fm4Image,
},
{
    title: 'DATA JASA',
    description: 'Anda bisa meihat data Jasa Kami ',
    imageUrl: fm5Image,
},
{
    title: 'MELAYANI CETAK UNDANGAN',
    description: 'Banyak pilihan cetak undangan di percetakan kami ',
    imageUrl: fm6Image,
},



];

return (
<div id='concert' className="card-container">
    <h2 className="section-title">JASA DI KREASI STUDIO</h2>
    <div className="card-grid">
        {concert.map((con, index) => (
            <Card
            key={index}
            title={con.title}
            description={con.description}
            imageUrl={con.imageUrl}
            />
            ))}
    </div>
</div>
);
};
export default CardList;
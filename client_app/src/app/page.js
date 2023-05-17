import CafeGrid from "@/app/components/cafeGrid";

const bgStyle = {
    backgroundImage: 'url(https://img.freepik.com/foto-gratis/vista-superior-granos-cafe-sobre-espacio-fondo-blanco-texto_176474-5028.jpg?w=2000)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

export default function Home() {
    return (
        <div className='flex flex-col  justify-center align-center h-screen 2xl:gap-28 gap-12 lg:px-32 px-4' style={bgStyle}>
            <h1 className='text-4xl font-medium text-center'>El aroma magico</h1>
            <CafeGrid/>
            <br/>
        </div>
    )
}

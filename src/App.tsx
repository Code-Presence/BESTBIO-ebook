import { Typography, Button } from '@material-tailwind/react';

import GenteMalhando  from './assets/BG/gente-se-exercitando.webp';
import GenteNoCampo  from './assets/BG/gentee-no-campo.webp';

import Ebook1  from './assets/Mocks/BookMockup-1.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

export default function App() {

    React.useEffect(() => {
        Aos.init({duration: 1000});
    }, []);


    return (
        <>
            <section className='w-screen h-screen bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: `url(${GenteMalhando})`}}>
                <div className='w-full h-full  backdrop-blur-[3px] px-64 pt-28 bg-gradient-to-r relative from-[rgba(186,206,74,.9)] to-[rgba(126,217,86,.9)] flex flex-col items-center gap-12'>
                    <span className='w-full text-white flex flex-col items-center'>
                        {/* <Typography variant='h1' placeholder={''}>Evite o Efeito Sanfona </Typography> */}
                        <Typography variant='h2' className='text-center' placeholder={''}>Descubra o segredo para <br /> manter o peso e viver com saúde!</Typography>
                    </span>

                    <div className='w-[50rem] h-[25rem] bg-white rounded-md shadow-lg'>

                    </div>

                    <Button placeholder={''} className='text-xl shadow-md' color='green' size='lg'>Estou cansada(o) de viver voltando para meu peso antigo</Button>

                    <div className='w-full absolute bottom-0 flex'>
                        <svg className="w-full h-[14vh] min-h-[100px] max-h-[250px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 40" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use href="#gentle-wave" x="10" y="-6" fill="rgba(255,255,255,0.8)" />
                                <use href="#gentle-wave" x="55" y="1" fill="rgba(255,255,255,0.6)" />
                                <use href="#gentle-wave" x="42" y="4" fill="rgba(255,255,255,0.2)" />
                                <use href="#gentle-wave" x="12" y="10" fill="#fff" />
                            </g>
                        </svg>
                    </div>

                </div>
            </section>
            <section className='w-screen h-screen bg-white -mt-1 grid grid-cols-2 gap-6 px-64 py-12' >
                <div className=' w-full h-full flex flex-col items-center justify-center gap-6 overflow-hidden'>
                    <Typography placeholder={''} data-aos='fade-right' variant='h2'>Apoio para uma Vida Saudável Sustentável</Typography>
                    <Typography className='' variant='lead' placeholder={''} data-aos="fade-right" data-aos-delay={200}>
                Alcançar seu objetivo de perda de peso é uma grande vitória. Entendemos os desafios de manter esse sucesso a longo prazo e estamos aqui para apoiá-lo em cada passo dessa jornada para um estilo de vida saudável e sustentável.
                    </Typography>

                    <Typography className='' variant='lead' placeholder={''} data-aos="fade-right" data-aos-delay={200}>
                    Muitas vezes, as dietas focam apenas na perda de peso a curto prazo, sem oferecer um plano realista para a manutenção a longo prazo. Isso leva muitas pessoas a recuperarem o peso perdido assim que retornam aos seus antigos hábitos alimentares e de estilo de vida.
                    </Typography>

                    <Typography className='' variant='lead' placeholder={''} data-aos="fade-right" data-aos-delay={200}>
                    Acreditamos que a chave para manter o peso perdido está na mudança de hábitos sustentáveis. Em vez de adotar dietas extremas ou soluções rápidas, incentivamos uma abordagem gradual e realista para a perda e manutenção de peso.
                    </Typography>

                    <Button className='' size='lg' placeholder={''} color='green' fullWidth data-aos="fade-right" data-aos-delay={400}>Saiba mais</Button>
                </div>

                <div className='bg-gray-100 w-full h-full '>

                </div>
            </section>

            <section className='w-screen h-screen bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: `url(${GenteNoCampo})`}}>
                <div className='w-full h-full  backdrop-blur-[3px] pb-12 pt-32 bg-gradient-to-r relative from-[rgba(125,217,86,0.96)] to-[rgba(186,206,74,.9)] items-center flex-col flex justify-center'>
                    <div className='w-full col-span-2 flex items-center justify-center flex-col mt-12'>
                        <Typography className='font-bold ' variant='lead' placeholder={''} color='black'>
                    Descubra a chave para uma vida saudável com nosso ebook exclusivo
                        </Typography>

                        <Typography variant='h2' placeholder={''}>
                        Como Manter o Peso Perdido
                        </Typography>
                    </div>
                    
                    <div className='w-full flex px-52 gap-12'>
                        <img src={Ebook1} className='h-[38rem] object-cover object-center' data-aos="fade-up"/>
                    
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-6 overflow-hidden' data-aos="fade-up" data-aos-delay={200}>
                            <Typography placeholder={''} variant='lead'>
                            Enquanto você embarca nesta jornada emocionante de manter o peso perdido, nada é mais valioso do que ter as ferramentas certas ao seu alcance.
                            </Typography>
                        </div>

                    </div>
                    <div className='w-full absolute top-0 flex rotate-180 -mt-1'>
                        <svg className="w-full h-[14vh] min-h-[100px] max-h-[250px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 40" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use href="#gentle-wave" x="10" y="-6" fill="rgba(255,255,255,0.8)" />
                                <use href="#gentle-wave" x="55" y="1" fill="rgba(255,255,255,0.6)" />
                                <use href="#gentle-wave" x="42" y="4" fill="rgba(255,255,255,0.2)" />
                                <use href="#gentle-wave" x="12" y="10" fill="#fff" />
                            </g>
                        </svg>
                    </div>

                </div>
            </section>
        </>
    );
}

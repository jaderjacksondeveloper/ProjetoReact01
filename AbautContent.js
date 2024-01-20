import styles from '@/components/AboutContent/AboutContent.module.css';
const AboutContent = () =>{
    return (
        <section className={`${styles.content} ${styles.about}`} >
        <div className={styles.maxWidth} >
            <h2 className={styles.title} >Sobre Empresa</h2>

            <div className={styles.aboutContent} >
                <div className={`${styles.column} ${styles.left}`} >
                <img src="/images/aboutcontent/praetor-500-i-aeroaffaires-e1564659460334.jpg" alt="Sobre Empresa"/>
                </div>
                <div className={`${styles.column} ${styles.right}`} >
                    <div className={styles.text} >
                        Embraer Praetor Desempenho 500
                    </div>
                    <p>O Embraer Praetor 500 é movido por dois motores Honeywell HTF7500E montados na fuselagem traseira, com cada um produzindo 6,540 libras de empuxo (13,080 libras no total).

                        Isso resulta no Praetor 500 sendo capaz de cruzar a uma velocidade máxima de 466 knots para um alcance máximo de 3,340 milhas náuticas (3,844 milhas / 6,186 km) a uma altitude máxima de 45,000 pés.
                        
                        O Praetor 500 tem uma distância de decolagem de apenas 4,222 pés e uma distância de pouso de 2,086 pés.
                        
                        Isso resulta no Praetor 500 sendo capazes de voar entre aeroportos menores que a concorrência com especificações semelhantes.</p>
                </div>
            </div>

            <div className={styles.aboutContent}>
                <div className={`${styles.column} ${styles.left}`}>
                    <img src="/images/aboutcontent/Praetor_600_flight.jpg" alt="Sobre Empresa"/>
                </div>
                <div className={`${styles.column} ${styles.right}`}>
                    <div className={styles.text}>
                        Pretor 600
                    </div>
                    <p>Conheça o Praetor 600 - o jato executivo da categoria Super-Midsize mais inovador e tecnologicamente avançado do mundo.

                        Com a cabine mais confortável da categoria, incluindo a melhor altitude da cabine e filtros HEPA como item de série, vá a mais destinos a bordo da aeronave que possui o melhor alcance da sua classe e possui um desempenho invejável em aeroportos desafiadores. O Praetor 600 realmente expande sua jornada e oferece o valor máximo.
                        
                        Nesta imponente aeronave de alcance intercontinental, voe para destinos distantes, como de Londres para Nova York, de São Paulo para Miami, ou de Dubai para Londres, sem escalas..</p>
                </div>
            </div>

            <div className={styles.aboutContent}>
                <div className={`${styles.column} ${styles.left}`}>
                    <img src="/images/aboutcontent/Legacy_650E.jpg" alt="Sobre Empresa"/>
                </div>
                <div className={`${styles.column} ${styles.right}`}>
                    <div className={styles.text}>
                        Legado 650E
                    </div>
                    <p>Com uma taxa de despachabilidade invejável, o Legacy 650E agora oferece uma garantia inédita de 10 anos/10.000 horas, estabelecendo um novo padrão no compromisso com o cliente. A maior cabine da categoria oferece conforto insuperável para até 14 passageiros em três zonas de cabine com conectividade de banda larga e serviço telefônico com cobertura global.

                        Tudo isso com o menor custo operacional da categoria e alcance transcontinental. Leve em consideração todos esses fatores e você entenderá porque essa aeronave é uma das bem sucedidas da aviação executiva. Faça seu negócio decorativo.  </p>
                </div>
            </div>
        </div>
    </section>

    );
}

export default AboutContent;
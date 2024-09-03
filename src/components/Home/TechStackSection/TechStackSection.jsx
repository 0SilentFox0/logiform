import styles from './TechStackSection.module.css'

import TON from '../../../assets/TechImages/blockchain/TON logo.svg'
import Avalanche from '../../../assets/TechImages/blockchain/Avalanche.svg'
import Binance from '../../../assets/TechImages/blockchain/Binance.svg'
import Ethereum from '../../../assets/TechImages/blockchain/Ethereum.svg'
import Near from '../../../assets/TechImages/blockchain/Near.svg'
import Solana from '../../../assets/TechImages/blockchain/Solana.svg'
import Polygon from '../../../assets/TechImages/blockchain/Polygon.svg'

import EX from '../../../assets/TechImages/backend/ex.svg'
import GO from '../../../assets/TechImages/backend/go.svg'
import Microservice from '../../../assets/TechImages/backend/Microservice.svg'
import Nest from '../../../assets/TechImages/backend/Nest js.svg'
import Node from '../../../assets/TechImages/backend/node-js.svg'
import Python from '../../../assets/TechImages/backend/python.svg'

import Javascript from '../../../assets/TechImages/frontend/Javascript logo.svg'
import Next from '../../../assets/TechImages/frontend/nextjs.svg'
import React from '../../../assets/TechImages/frontend/reactjs logo.svg'
import ReactNative from '../../../assets/TechImages/frontend/reactnative.svg'
import Saas from '../../../assets/TechImages/frontend/Saas.svg'
import SCSS from '../../../assets/TechImages/frontend/SCSS.svg'
import Tailwind from '../../../assets/TechImages/frontend/Tailwind CSS.svg'

import MongoDB from '../../../assets/TechImages/databases/MongoDB.svg'
import MySQL from '../../../assets/TechImages/databases/MySQL.svg'
import PostgreSQL from '../../../assets/TechImages/databases/PostgreSQL.svg'

import AWS from '../../../assets/TechImages/cloudServices/AWS.svg'
import Azure from '../../../assets/TechImages/cloudServices/Azure.svg'
import Cloud from '../../../assets/TechImages/cloudServices/google-cloud logo.svg'

import Docker from '../../../assets/TechImages/devops/Docker.svg'
import Kubernetes from '../../../assets/TechImages/devops/Kubernetes.svg'


import { useState } from 'react'

function TechStackSection() {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Our tech stack</h2>
                <p className={styles.subtitle}>
                    We Master Web3 Technologies with Expertise in Blockchain, Back-End, Front-End, Databases, Cloud Services, and DevOps
                </p>
            </div>

            <div className={styles.tabsContainer}>

                <div className={styles.tabs}>
                    <button className={toggleState === 1 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(1)}>Blockchain</button>
                    <button className={toggleState === 2 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(2)}>Back-end</button>
                    <button className={toggleState === 3 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(3)}>Front-end</button>
                    <button className={toggleState === 4 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(4)}>Databases</button>
                    <button className={toggleState === 5 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(5)}>Cloud Services</button>
                    <button className={toggleState === 6 ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} onClick={() => toggleTab(6)}>DevOps</button>
                </div>
                
                <div className={styles.content}>

                    <div className={toggleState === 1 ? `${styles.containerGrid} ${styles.activeContainerGrid}` : `${styles.containerGrid}`}>
                        <div className={`${styles.item} ${styles.avalanche}`}>
                            <img src={Avalanche} />
                            <p>Avalanche</p>
                        </div>
                        <div className={`${styles.item} ${styles.ton}`}>
                            <img src={TON} />
                            <p>TON</p>
                        </div>
                        <div className={`${styles.item} ${styles.solana}`}>
                            <img src={Solana} />
                            <p>Solana</p>
                        </div>
                        <div className={`${styles.item} ${styles.ethereum}`}>
                            <img src={Ethereum} />
                            <p>Ethereum</p>
                        </div>
                        <div className={`${styles.item} ${styles.near}`}>
                            <img src={Near} />
                            <p>Near</p>
                        </div>
                        <div className={`${styles.item} ${styles.binance}`}>
                            <img src={Binance} />
                            <p>Binance Smart Chain</p>
                        </div>
                        <div className={`${styles.item} ${styles.polygon}`}>
                            <img src={Polygon} />
                            <p>Polygon</p>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? `${styles.containerGrid} ${styles.activeContainerGrid}` : `${styles.containerGrid}`}>
                        <div className={`${styles.item} ${styles.nest}`}>
                            <img src={Nest} />
                            <p>Nest.js</p>
                        </div>
                        <div className={`${styles.item} ${styles.node}`}>
                            <img src={Node} />
                            <p>Node.js</p>
                        </div>
                        <div className={`${styles.item} ${styles.microservices}`}>
                            <img src={Microservice} />
                            <p>Microservices</p>
                        </div>
                        <div className={`${styles.item} ${styles.python}`}>
                            <img src={Python} />
                            <p>Python</p>
                        </div>
                        <div className={`${styles.item} ${styles.go}`}>
                            <img src={GO} />
                            <p>Go</p>
                        </div>
                        <div className={`${styles.item} ${styles.express}`}>
                            <img src={EX} />
                            <p>Express</p>
                        </div>
                        <div className={`${styles.item} ${styles.avalancheFake}`}>
                            <img src={Avalanche} />
                            <p>Avalanche</p>
                        </div>
                    </div>

                    <div className={toggleState === 3 ? `${styles.containerGrid} ${styles.activeContainerGrid}` : `${styles.containerGrid}`}>
                        <div className={`${styles.item} ${styles.react}`}>
                            <img src={React} />
                            <p>React.js</p>
                        </div>
                        <div className={`${styles.item} ${styles.reactNative}`}>
                            <img src={ReactNative} />
                            <p>React Native</p>
                        </div>
                        <div className={`${styles.item} ${styles.javaScript}`}>
                            <img src={Javascript} />
                            <p>JavaScript</p>
                        </div>
                        <div className={`${styles.item} ${styles.scss}`}>
                            <img src={SCSS} />
                            <p>SCSS</p>
                        </div>
                        <div className={`${styles.item} ${styles.sass}`}>
                            <img src={Saas} />
                            <p>Sass</p>
                        </div>
                        <div className={`${styles.item} ${styles.next}`}>
                            <img src={Next} />
                            <p>Next.js</p>
                        </div>
                        <div className={`${styles.item} ${styles.tailwind}`}>
                            <img src={Tailwind} />
                            <p>Tailwind CSS</p>
                        </div>
                    </div>

                    <div className={toggleState === 4 ? `${styles.containerGrid} ${styles.activeContainerGrid}` : `${styles.containerGrid}`}>
                        <div className={`${styles.item} ${styles.mySQL}`}>
                            <img src={MySQL} />
                            <p>MySQL</p>
                        </div>
                        <div className={`${styles.item} ${styles.postgreSQL}`}>
                            <img src={PostgreSQL} />
                            <p>PostgreSQL</p>
                        </div>
                        <div className={`${styles.item} ${styles.mongoDB}`}>
                            <img src={MongoDB} />
                            <p>MongoDB</p>
                        </div>
                    </div>

                    <div className={toggleState === 5 ? `${styles.containerGrid} ${styles.activeContainerGrid}` : `${styles.containerGrid}`}>
                        <div className={`${styles.item} ${styles.aws}`}>
                            <img src={AWS} />
                            <p>AWS</p>
                        </div>
                        <div className={`${styles.item} ${styles.cloud}`}>
                            <img src={Cloud} />
                            <p>Google Cloud</p>
                        </div>
                        <div className={`${styles.item} ${styles.azure}`}>
                            <img src={Azure} />
                            <p>Azure</p>
                        </div>
                    </div>

                    <div className={toggleState === 6 ? `${styles.containerGrid} ${styles.activeContainerGrid}` : `${styles.containerGrid}`}>
                        <div className={`${styles.item} ${styles.docker}`}>
                            <img src={Docker} />
                            <p>Docker</p>
                        </div>
                        <div className={`${styles.item} ${styles.kubernetes}`}>
                            <img src={Kubernetes} />
                            <p>Kubernetes</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TechStackSection
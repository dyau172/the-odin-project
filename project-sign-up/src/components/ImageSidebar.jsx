import React from './imageSidebar.scss'
import sidebarphoto from '../images/photo.avif'
import logo from '../images/odin-lined.png'
import '../font/Norse-Bold.otf'


export default function imageSidebar() {
    return (
        <div className="imageSidebar">
            <div className="imageBar" style={{
                backgroundImage: `url(${sidebarphoto})`,
                width: '40vw'
            }}></div>

            <div className="banner">
                <div className="brand" style={{
                    backgroundImage: `url(${logo})`,
                }}></div>

                <div className="text">
                    <h2>ODIN</h2>
                </div>

            </div>
        </div>
    )
}

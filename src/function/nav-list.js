import React from "react"
import Config from "../config/config_nav-btn.js"
import Styles from "../sass/module/area/navigation.module.scss"

// Galleryをタップした時の年代リスト表示処理
function clickBtnAction(){
    // 年代リスト取得
    const navList = document.getElementsByClassName("js-nav-btn");
    // 年代リスト表示・非表示処理
    function clickBtn(){
        Config.map( item => {
            if (navList[item.no].textContent === item.to){
                navList[item.no].textContent = "";
                navList[item.no].style.borderTop = "none";
                navList[item.no].style.padding = "0";
            } else {
                navList[item.no].textContent = item.to;
                navList[item.no].style.padding = "10px";
            }
            return true;
         })
    }

    // 上記functionを引き継いだonclick属性を付与したGalleryボタンを返す
    return (
        <div className={ Styles.btnStyle }>
            <button
                id="btn-display"
                className={ Styles.texts }
                onClick={ clickBtn }
            >
                Gallery
            </button>
        </div>
    )
}

export default clickBtnAction

/**
 * Created by 郭艳新 on 2017/6/22.
 */
import React, { Component } from 'react';
import './Content.css';
class Gyxcontent extends Component {
    render() {
        return (
        <div className="GYX_wrap">
            <div className="GYX_news clear">
                <p className="GYX_title">首页 > 关于我们 > 董事长致辞</p>
                <div className="GYX_newsL">
                    <img src={require('./Img/1.jpg')}/>
                </div>
                <div className="GYX_content clear">
                    <h2>董事长致辞</h2>
                    <p>
                        中国医药是一家沐浴改革开放春风成立，历经改制重组，伴随医药行业转型成长起来的央企上市公司，从成立之初的统管全国医药进出口事业，
                    </p>
                    <p>
                        2013年，重组后的中国医药如箭在弦，进入新的发展通道。我们以前所未有的魄力，抢抓医疗体制改革、医药产业整体转型的战略机遇，
                    </p>
                    <p>
                        企业发展永无止境。我们将主动顺应经济发展潮流和产业变化趋势，巩固并提升自身核心竞争能力，持续为股东创造价值，与客户合作共赢，
                    </p>
                    <div><span>董事长</span><img src={require('./Img/1.png')} className="GYX_qM"/></div>
                </div>
            </div>
        </div>
        );
    }
}

export default Gyxcontent;

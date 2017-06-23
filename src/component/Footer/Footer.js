import React, { Component } from 'react';
import footer from '../../img/footer.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="WTY_Footer">
                <div className="WTY_wrap clear">
                    <img src={footer} className="WTY_FooterImg"/>
                    <p>联系我们 | 网站地图</p>
                    <p>
                        <span>地址：中国北京市东城区光明中街18号</span>
                        <span>邮政编码：100061</span>
                        <span>联系电话：010-67116688</span>
                    </p>
                    <p>
                        <span>版权©2014中国医药健康产业股份有限公司</span>
                        <span>ICP:NO.05047517</span>
                        <span>京公安备案110401300010</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;

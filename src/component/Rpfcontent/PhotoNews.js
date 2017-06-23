import React,{ Component } from 'react';
import './PhotoNews.css';
import rpfImg from '../../img/rpfImg_03.jpg';
class News extends Component {
    render(){
        return (
            <div>
                <div className="PhotoNews">
                <h4>首页>新闻动态>图片新闻</h4>
                <p className="titOne">中国医药喜获“中国医药百强企业奖”</p>
                <p className="titTwo">董事长谭星辉先生荣获“中国百强杰出企业家奖”</p>
                    <div className="rpfImg">
                        <img src={rpfImg}/>
                    </div>

                <p className="describe">12月3 - 4日，由中国上市公司百强高峰论坛（华顿经济研究院）、中国中冶联合主办，兰州国际港务区等协办的“第十六届中国上市公司百强高峰论坛”暨“第二季中国百强城市全面发展论坛”在京举行，人民网、中国证券报等20多家媒体和报社参会，中国医药喜获“中国医药百强企业将”、董事长谭星辉先生荣获“中国百强杰出企业家奖”。</p>
                <span className="rpfspan">2016.12.05</span>
                </div>
            </div>

        );
    }
}

export default News;
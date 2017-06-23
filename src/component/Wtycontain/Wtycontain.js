import React,{Component} from 'react';
import './Wtycontain.css'
class Wtycontain extends Component{
    render(){
        return(
            <div className="WTY_contain clear">
                <div className="WTY_wrap clear">
                    <div className="WTY_containTop">首页 > 产业领域 > 国际贸易板块 > 中国医药保健品有限公司</div>
                    <div className="WTY_first clear">
                        <p className="WTY_firstTitle">中国医药保健品有限公司</p>
                        <div className="WTY_firstContent">中国医药保健品有限公司是中国医药的全资子公司，继承着公司前身——中国医药保健品进出口总公司的国际化业务资源和经营传统，在天然药物、医药化工、政府项目和健康产品大宗商贸等领域大力开拓国内外市场，是公司推进医药产业国际化经营的核心企业。</div>
                        <div className="WTY_firstContain">
                            <dl>
                                <dt><img src={require('../../img/images/contain_03.jpg')}/></dt>
                                <dd>
                                    <p>一、医药化工业务</p>
                                    <p>医药化工及相关医药产品的进出口贸易是公司传统的特色优势业务，也是公司医药工业和国内商业业务国际经营的重要窗口。公司医药化工业务单元通过专业的国际市场推广，大力引进国外优秀医药产品和技术，同时承接代理国内外医药品种的国内营销，成为公司在国际国内两个市场上提供医药产品和专业化服务全面解决方案的桥梁。</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="WTY_second">
                    <div></div>
                </div>
            </div>
        )
    }
}
export default Wtycontain;
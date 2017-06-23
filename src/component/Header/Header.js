import React, { Component } from 'react';
import Wtycontain from '../Wtycontain'
import Gyxcontent from '../Gyxcontent'
import Rpfcontent from '../Rpfcontent'
import './Header.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
const One=()=>(
    <div>
        <h1>首页</h1>
    </div>
);
const About=()=>(
    <Gyxcontent/>
);
const News=()=>(
    <Rpfcontent/>
);
const Partner=()=>(
    <div>
        <h1>投资者关系</h1>
    </div>
);
const Product=()=>(
    <Wtycontain/>
);
const Country=()=>(
    <div>
        <h1>社会责任</h1>
    </div>
);
const Good=()=>(
    <div>
        <h1>人才理念</h1>
    </div>
);
class Header extends Component {
    render() {
        return (
            <div className="WTY_HeaderTop clear">
               <div className="WTY_wrap clear">
                   <div id="box" className="clear">
                       <div className="left">
                            <p className="WTY_HeaderName">HELLO{this.props.name}</p>
                            <p>证券代码：600056</p>
                       </div>
                       <img src={require('../../img/logo.png')} className="left WTY_logoImg"/>
                       <p className="right">中文|English</p>
                   </div>
               </div>
                <Router>
                    <div className="clear">
                    <div className="WTY_HeaderBottom clear">
                        <div className="WTY_wrap clear">
                            <ul>
                                <li><Link to="/">首页</Link></li>
                                <li><Link to="/about">关于我们</Link></li>
                                <li><Link to="/news">新闻动态</Link></li>
                                <li><Link to="/product">产业领域</Link></li>
                                <li><Link to="/partner">投资者关系</Link></li>
                                <li><Link to="/country">社会责任</Link></li>
                                <li><Link to="/good">人才理念</Link></li>
                                <li><img src={require('../../img/more.png')}/> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="clear">
                        <Route exact path="/" component={One}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/news" component={News}/>
                        <Route exact path="/product" component={Product}/>
                        <Route exact path="/partner" component={Partner}/>
                        <Route exact path="/country" component={Country}/>
                        <Route exact path="/good" component={Good}/>
                    </div>
                    </div>
                </Router>
            </div>

        );
    }
}

export default Header;

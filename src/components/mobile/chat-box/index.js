import React from 'react'
import CodeView from '../../../code-view/index'
import CodeDoc from '../../../code-doc/index'
import Highlight from 'react-highlight'
import { Row, Col } from 'fit-layout'
import Title from '../../title.js'
import readme from './readme.md'

import ChatBoxSourceCode from 'text!../../../../lib/mobile/chat-box/web/src/chat-box/index.js'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Reverse from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/reverse.js'
import reverseCode from 'text!./demo/reverse.js'
import reverseMarkdown from './demo/reverse.md'

import BackBottom from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/back-bottom.js'
import backBottomCode from 'text!./demo/back-bottom.js'
import backBottomMarkdown from './demo/back-bottom.md'

import Loading from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/loading.js'
import loadingCode from 'text!./demo/loading.js'
import loadingMarkdown from './demo/loading.md'

const colStyle = {
    padding: 10
}

const docStyle = {
    margin: 10,
    padding: 10,
    background: 'white'
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '聊天盒子'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic/>
                        </CodeView>

                        <CodeView md={backBottomMarkdown}
                                  code={backBottomCode}
                                  style={{marginTop:10}}>
                            <BackBottom/>
                        </CodeView>
                    </Col>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={reverseMarkdown}
                                  code={reverseCode}>
                            <Reverse/>
                        </CodeView>

                        <CodeView md={loadingMarkdown}
                                  code={loadingCode}
                                  style={{marginTop:10}}>
                            <Loading/>
                        </CodeView>
                    </Col>
                </Row>

                <div style={docStyle}>
                    <CodeDoc code={ChatBoxSourceCode}/>
                </div>

            </div>
        )
    }
}
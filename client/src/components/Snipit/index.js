import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./style.css"

class Snipitview extends React.Component {

    render() {
        const title = this.props.title;
        const body = this.props.body;
        const username = this.props.username;
        const category = this.props.category;

        // console.log(title);
        return (<Card className={"snipitCard"} style={{ border: "solid 3px black" }}>
            <Row>
                <Col size={"12"}>
                    <div id={"titleBox"}>
                    <h1 id="snipitTitleTxt">{title}</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size={"12"}>
                    <Editor
                        value={body}
                        highlight={body => highlight(body, languages.js)}
                        padding={10}
                        style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12, height: "275px", overflow: "scroll", backgroundColor: "darkgray" }}
                    />
                </Col>
            </Row>
            <Row>
                <Col size={"12"}>
                    <div id={"snipitInfoTxtBox"}>
                        <Row>
                            <Col size={"md-6"}>
                                <h2 className={"snipitInfoTxt"}>Created By User:</h2>
                            </Col>
                            <Col size={"md-6"}>
                                <h2 className={"snipitInfoTxt"}> {username}</h2>
                            </Col>
                            <Col size={"md-6"}>
                                <h2 className={"snipitInfoTxt"}>Category:</h2>
                            </Col>
                            <Col size={"md-6"}>
                                <h2 className={"snipitInfoTxt"}>{category}</h2>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Card>)
    }
}

export default Snipitview;
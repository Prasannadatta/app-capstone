import '../style/DocumentEditor.css';
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';
import {DocumentEditorContainerComponent, Toolbar, Inject} from "@syncfusion/ej2-react-documenteditor";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function DocumentEditor() {
  return (
    <div className="documentEditorWrapper">
      <NavBar />
      <Container>
        <Button className="doc-editor-button">Voice Input</Button>
        <Button className="doc-editor-button">Voice Commands</Button>
      </Container>
      <DocumentEditorContainerComponent height="700" enableToolbar={true}>
        <Inject services={[Toolbar]}></Inject>
      </DocumentEditorContainerComponent>
      <Footer />
    </div>
  );
}

export default DocumentEditor;

import React from 'react';
import {
  Document,
  Font,
  Page,
  Text,
  StyleSheet,
  View,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 2,
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  mark: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
  },
});
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});
const Pdf = ({ pdfContent }) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.section}>
        <Text style={styles.title}>Heading</Text>
        {pdfContent.split('   ').map((pdf) => <Text style={styles.text}>{`${pdf}`}</Text>)}
      </View>
    </Page>
  </Document>
);
export default Pdf;

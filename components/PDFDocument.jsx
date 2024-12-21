// components/MyPDFDocument.js
import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { user } from "@/public/assets";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#006AA7'
  },
  text: {
    fontSize: 12,
    marginBottom: 15,
    color: '#FECC02',
    fontWeight: 'bold'
  },
  value: {
    fontSize: 12,
    marginBottom: 15,
  },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  descContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // Make the image rounded
    marginBottom: 10,
  },
});

// Create Document Component
const PDFDocument = ({ data } ) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>User Information</Text>
      </View>
      <View style={styles.section}>
      {/* <View style={styles.container}>
      {data.img && (
          <Image src={data.img}
                 style={styles.image}
                 alt="Placeholder"
                 onError={() => console.log("Image failed to load!")} />
        )}
        </View> */}
        <View style={styles.container}>
            <Text style={styles.text}>User: </Text>
            <Text style={styles.value}> {data.name}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Company Name: </Text>
            <Text style={styles.value}> {data.company}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Organization Number: </Text>
            <Text style={styles.value}> {data.number}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Name of responsible person: </Text>
            <Text style={styles.value}>{data.responsiblePerson}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Address : </Text>
            <Text style={styles.value}> {data.address}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Type Of Business : </Text>
            <Text style={styles.value}> {data.business}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Email : </Text>
            <Text style={styles.value}>{data.email}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>Phone Numer : </Text>
            <Text style={styles.value}> {data.phone}</Text>
        </View>
        <View style={styles.descContainer}>
            <Text style={styles.text}>Brief Description of Your Company : </Text>
            <Text style={styles.value}>{data.description}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;

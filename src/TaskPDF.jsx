import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  header: { fontSize: 18, marginBottom: 10 },
  row: { flexDirection: "row", borderBottom: "1px solid #ccc", padding: 5 },
  cell: { flex: 1, fontSize: 12 }
});

export default function TaskPDF({ tasks = [] }) {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Task List</Text>
        <View>
          <View style={styles.row}>
            <Text style={styles.cell}>Name</Text>
            <Text style={styles.cell}>Date</Text>
            <Text style={styles.cell}>Description</Text>
          </View>
          {tasks.map((task) => (
            <View key={task.id || task.name} style={styles.row}>
              <Text style={styles.cell}>{task.name}</Text>
              <Text style={styles.cell}>{task.date}</Text>
              <Text style={styles.cell}>{task.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
<script setup>
  import noQuery from "./example.xlsx?sheetjs";
  import query1 from "./example.xlsx?sheetjs&name=test2";
  import query2 from "./example.xlsx?sheetjs&name=test&name=test2";
  console.log('noQuery:\n', noQuery);
  console.log('query1:\n', query1);
  console.log('query2:\n', query2);
</script>

<template>
  Test
</template>

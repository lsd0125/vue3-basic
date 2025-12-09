<template>
  <div class="layout">
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot></slot> <!-- 預設插槽（沒有 name） -->
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background: #42b883;
  color: white;
  padding: 20px;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
<template>
<div>
    <input type="text" v-model="message" />
    <button @click="sendMessage">送信</button>
    <ul>
        <li v-for="message in messages" :key="message.id">{{ message.text }}    aaw        </li>
    </ul>
</div>
</template>

<script setup>
const messages = ref([])
const message = ref("") 

const sendMessage = () => {
    // 入力された文字列を取得する
    const text = message.value;

    // 入力フィールドを空にする
    message.value = "";

    // 入力された文字列をメッセージリストに追加する
    messages.value.push({
    id: Date.now(),
    text
    });

    console.log(new Date());
}
</script>
<template>
    <div v-if="newCardOpenIndex">
        <el-form @submit.native.prevent="close">
            <el-form-item label="Name der Karte">
                <el-input v-model="cardData.name" required></el-input>
            </el-form-item>
            <el-form-item label="Typ der Karte">
                <el-radio-group v-model="cardData.type">
                    <el-radio label="letter">Buchstabe</el-radio>
                    <el-radio label="custom">Sonstiges</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Subtext der Karte">
                <el-input 
                v-model="cardData.subname" 
                required
                placeholder="Karte wird aufgedeckt, wenn"
                :disabled="(cardData.type === 'letter')"></el-input>
            </el-form-item>
            <el-form-item label="Kartentext">
                <el-input 
                type="textarea" 
                v-model="cardData.text" 
                required 
                rows="7"
                style="resize: none"
                ></el-input>
                <small>Text unterstützt <a href="https://commonmark.org/help/" target="_blank">Markdown</a> </small>
            </el-form-item>
            <el-form-item>
                <el-row style="width: 100%">
                    <el-col :span="12">
                        <el-button type="info" @click="close">Schließen</el-button>
                    </el-col>
                    <el-col :span="12" style="text-align: right;">
                        <el-button type="primary" native-type="submit">Speichern</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
        <CardPreview v-bind:cardData="cardData"></CardPreview>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import CardPreview from './../CardPreview/CardPreview';

    export default {
        components: { CardPreview },
        computed: {
            ...mapState(['newCardOpenIndex']),
            cardData(){
                return this.$store.state.cards.find(i => i.id === this.$store.state.newCardOpenIndex)
            }
        },
        methods: {
            close(){
                this.$store.commit('closeCardWindow');
            }
        }
    }
</script>

<style scoped>
</style>
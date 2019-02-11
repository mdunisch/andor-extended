<template>
    <div v-if="newCardOpen">
        <el-form :model="form" @submit.native.prevent="save">
            <el-form-item label="Name der Karte">
                <el-input v-model="form.name" required></el-input>
            </el-form-item>
            <el-form-item label="Typ der Karte">
                <el-radio-group v-model="form.type">
                    <el-radio label="letter">Buchstabe</el-radio>
                    <el-radio label="custom">Sonstiges</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Subtext der Karte">
                <el-input 
                v-model="form.subname" 
                required
                placeholder="Karte wird aufgedeckt, wenn"
                :disabled="(form.type === 'letter')"></el-input>
            </el-form-item>
            <el-form-item label="Kartentext">
                <el-input 
                type="textarea" 
                v-model="form.text" 
                required 
                rows="7"
                style="resize: none"
                ></el-input>
                <small>Text unterstützt <a href="https://commonmark.org/help/" target="_blank">Markdown</a> </small>
            </el-form-item>
            <el-form-item>
                <el-row style="width: 100%">
                    <el-col :span="12">
                        <el-button type="info" @click="clear">Abbrechen</el-button>
                    </el-col>
                    <el-col :span="12" style="text-align: right;">
                        <el-button type="primary" native-type="submit">Speichern</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
        <span>Todo: Hier noch ein renderBeispiel</span>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                form: {
                    name: '',
                    subname: '',
                    type: 'letter',
                    text: ''
                }
            }
        },
        computed: mapState(['newCardOpen']),
        methods: {
            clear() {
                // Reset State
                Object.assign(this.$data, this.$options.data());
                // Close window
                this.$store.commit('changeVisibleOfNewCard', false);
            },
            save(){
                this.$store.commit('addCard', {...this.form});
                this.clear();
            }
        }
    }
</script>

<style scoped>
</style>
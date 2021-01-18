<template>
    <section @dragover.prevent @drop.prevent>
        <div v-if="error" class="error bg-danger text-center border">
            <i class="fas fa-exclamation-triangle fa-2x"/>
            <p>Error <br> Please try again </p>
        </div>
        <form v-else class="uploader bg-primary text-center border" @drop="handleFileDrop" enctype="multipart/form-data">
            <progress v-if="uploading"/>
            <i class="fas fa-cloud-upload-alt fa-2x"/>
            <p>Choose files or drag & drop here</p>
            <input type="file" name="filename" @change="handleFileInput" ref="file">
        </form>
        <div v-for="item in items" :key="item.id" :item="item">
            <Thumbnail :filepath="item.filename"/>
            <button class="delete btn btn-danger position-relative" @click="deleteFile(item.id)">&times;</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    import Thumbnail from "./Thumbnail";
    export default {
        name: "Uploader",
        components: {Thumbnail},
        data(){
            return {
                items: [{filepath: 'animals/milo/milo.jpg'}],
                uploading: false,
                progress: 0,
                error: false,
            }
        },
        methods: {
            addFile(file){
                if (!file) return;
                this.uploading = true;
                console.log(file.files[0]);
                this.uploading = false;
            },
            handleFileDrop(e){
                this.addFile(e.dataTransfer.files);
            },
            handleFileInput(){
                this.uploading = true;
                this.file = this.$refs.file.files[0];
                let formData = new FormData();
                formData.append('filename', this.file);
                //todo need to sort otu category/subcategory/type situation
                formData.append('category', 'animals');
                formData.append('type', 'image');
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(progressEvent.loaded / progressEvent.total) * 100;
                        console.log(percentCompleted);
                        this.progress = percentCompleted;
                    }
                };
                axios.post('/api/admin/media/details', formData, config)
                    .then(res => this.items.unshift(res.data.fields))
                    .catch(() => this.error = true);
                this.uploading = false;
            },
            deleteFile(id){
                axios.post('/api/admin/media/delete', encodeURI(`id=${id}`))
                    .then( () => this.items = this.items.filter( item => item.id !== id))
                //todo catch;
            }
        },
        mounted(){
            axios.get('/api/admin/media')
            .then( res => this.items = res.data.fields);
            //todo catch;
        },
    }
</script>

<style scoped lang="scss">
    section {
        display: flex;
        flex-wrap: wrap;
    }
    .uploader, .error {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        i {
            margin: 10px;
        }
        p {
            margin: 0;
        }
    }
    div, form {
        height: 140px;
        width: 140px;
        background: #ccc;
        object-fit: cover;
        margin: 1vh;
    }
    input {
        position: absolute;
        top: 0;
        right: 0;
        height: 140px;
        width: 140px;
        opacity: 0;
    }
    /*progress bar - https://stackoverflow.com/questions/18368202/how-can-i-set-the-color-for-the-progress-element */
    progress {
        max-width: 100%;
        border-radius: 0;
        border-bottom: 1px solid #ccc;
        background: #ccc;
        color: $primary;
        height: 10px;
        position: absolute;
        top: 0;
        left: 0;
    }
    progress::-webkit-progress-bar {
        background: #ccc;
    }
    progress::-webkit-progress-value {
        background: #59D3C8;
    }
    progress::-moz-progress-bar {
        background: #59D3C8;
    }

    .delete {
        padding: 0 .5vw;
        margin: 0;
        top: -24px;
        line-height: 1.1;
    }
</style>

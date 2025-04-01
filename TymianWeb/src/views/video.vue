<template>
    <navigationBar />
    <videoBackground />

    <!-- <background /> -->
    <div class="common-layout">
        <el-container>
            <el-header>
                
            </el-header>
        <el-container>

            <el-aside width="200px">
                <!-- <episodeList/> -->
            </el-aside>

            <el-container>

                <el-main>
                    <videoPlayer />
                </el-main>

                <el-footer>
                    <!-- 123 -->
                </el-footer>

            </el-container>
            <el-aside width="200px">
                <!-- Aside -->
            </el-aside>

        </el-container>
        </el-container>
    </div>
</template>

<script setup>
import navigationBar from './components/Home/navigationBar.vue';
import videoBackground from './components/Video/videoBackground.vue';
import videoPlayer from './components/Video/videoPlayer.vue';
import episodeList from './components/Video/episodeList.vue';
// import background from './components/background.vue';
</script>

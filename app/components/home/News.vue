<template>
    <section id="home_news" class="section_padding_top">
        <div class="container">
            <!-- Section Heading -->
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="section_heading_center">
                        <h2>Latest travel news</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="home_news_left_wrapper">
                        <div class="home_news_item">
                            <div class="home_news_img">
                                <NuxtLink to="/news/details"><img src="../../assets/img/news/small1.png" alt="img"></NuxtLink>
                            </div>
                            <div class="home_news_content">
                                <h3><NuxtLink to="/news/details">Revolutionising the travel industry,
                                        one partnership at a time</NuxtLink></h3>
                                <p><NuxtLink to="/news">26 Oct 2021</NuxtLink> <span> <i class="fas fa-circle"></i>5min
                                        read</span> </p>
                            </div>
                        </div>
                        <div class="home_news_item">
                            <div class="home_news_img">
                                <NuxtLink to="/news/details"><img src="../../assets/img/news/small2.png" alt="img"></NuxtLink>
                            </div>
                            <div class="home_news_content">
                                <h3><NuxtLink to="/news/details">t is a long established fact that a reader will be
                                        distracted.</NuxtLink></h3>
                                <p><NuxtLink to="/news">26 Oct 2021</NuxtLink> <span> <i class="fas fa-circle"></i>5min
                                        read</span> </p>
                            </div>
                        </div>
                        <div class="home_news_item">
                            <div class="home_news_img">
                                <NuxtLink to="/news/details"><img src="../../assets/img/news/small3.png" alt="img"></NuxtLink>
                            </div>
                            <div class="home_news_content">
                                <h3><NuxtLink to="/#!">There are many variations of passages of sum available</NuxtLink></h3>
                                <p><NuxtLink to="/news">26 Oct 2021</NuxtLink> <span> <i class="fas fa-circle"></i>5min
                                        read</span> </p>
                            </div>
                        </div>
                        <div class="home_news_item">
                            <div class="home_news_img">
                                <NuxtLink to="/news/details"><img src="../../assets/img/news/small4.png" alt="img"></NuxtLink>
                            </div>
                            <div class="home_news_content">
                                <h3><NuxtLink to="/news/details">Contrary to popular belief, Lorem Ipsum is not
                                        simply.</NuxtLink></h3>
                                <p><NuxtLink to="/news">26 Oct 2021</NuxtLink> <span> <i class="fas fa-circle"></i>5min
                                        read</span> </p>
                            </div>
                        </div>
                        <div class="home_news_item">
                            <div class="seeall_link">
                                <NuxtLink to="/news">See all article <i class="fas fa-arrow-right"></i></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="home_news_big">
                        <div class="news_home_bigest img_hover">
                            <NuxtLink to="/news/details"><img src="../../assets/img/news/new-big.png" alt="img"></NuxtLink>
                        </div>
                        <h3><NuxtLink to="/news/details">There are many variations of passages available but</NuxtLink> </h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of.
                            The point of using Lorem Ipsum is that it has a more</p>
                        <p>It is a long established fact that a reader will be distracted by the readable long
                            established fact that a reader will be distracted content of a
                            page when looking at its layout.</p>
                        <NuxtLink to="/news/details">Read full article <i class="fas fa-arrow-right"></i></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: "News"
};
</script>
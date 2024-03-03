import { AspectRatio, Container, ScrollArea, Tabs} from "@mantine/core";
import classes from "./VideoSection.module.css";
import VideoCard from "../UI/VideoCard";

const VideoSection = () => {
  return (
		<Container mt='xl' size='xl' mb='xl' fluid>
			<Tabs
				variant='pills'
				color={'#dee2e6'}
				defaultValue='gallery'
				orientation='vertical'
				placement='right'
				classNames={{ list: classes.list, tabLabel: classes.tabLabel, tab: classes.tab }}
			>
				<Tabs.List>
					<ScrollArea h={"100%"} miw={'100%'}>
						<Tabs.Tab value='gallery'>
							<VideoCard image="https://i.ibb.co/YLYZF0T/Screenshot-2.png" title="Семья мастеров изделий из бетона и гипса" subTitle="Видео Телеканал Беларусь 24"/>
						</Tabs.Tab>
						<Tabs.Tab value='messages'>
							<VideoCard image="https://i.ibb.co/TPBTSNw/Screenshot-1.png" title="Наше утро с 54 минуты" subTitle="Видео OHT"/>
						</Tabs.Tab>
						<Tabs.Tab value='settings'>
							<VideoCard image="https://i.ibb.co/YLYZF0T/Screenshot-2.png" title="Семья мастеров изделий из бетона и гипса" subTitle="Видео Телеканал Беларусь 24"/>
						</Tabs.Tab>
						<Tabs.Tab value='gallery1'>
							<VideoCard image="https://i.ibb.co/YLYZF0T/Screenshot-2.png" title="Семья мастеров изделий из бетона и гипса" subTitle="Видео Телеканал Беларусь 24"/>
						</Tabs.Tab>
						<Tabs.Tab value='messages1'>
							<VideoCard image="https://i.ibb.co/YLYZF0T/Screenshot-2.png" title="Семья мастеров изделий из бетона и гипса" subTitle="Видео Телеканал Беларусь 24"/>
						</Tabs.Tab>
						<Tabs.Tab value='settings1'>
							<VideoCard image="https://i.ibb.co/YLYZF0T/Screenshot-2.png" title="Семья мастеров изделий из бетона и гипса" subTitle="Видео Телеканал Беларусь 24"/>
						</Tabs.Tab>
					</ScrollArea>
				</Tabs.List>

				<Tabs.Panel value='gallery'>
					<AspectRatio ratio={16 / 9}>
						<iframe
							src='https://www.youtube.com/embed/vLMgEcPsZDc?si=c-GCsRX3VoQMfn-2'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</AspectRatio>
				</Tabs.Panel>
				<Tabs.Panel value='messages'>
					<AspectRatio ratio={16 / 9}>
						<iframe
							src='https://www.youtube.com/embed/rQwD01zEM2o?si=zry8dw-E5GwaLjei'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</AspectRatio>
				</Tabs.Panel>
				<Tabs.Panel value='settings'>
					<AspectRatio ratio={16 / 9}>
						<iframe
							src='https://www.youtube.com/embed/mzJ4vCjSt28'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</AspectRatio>
				</Tabs.Panel>
				<Tabs.Panel value='gallery1'>
					<AspectRatio ratio={16 / 9}>
						<iframe
							src='https://www.youtube.com/embed/vLMgEcPsZDc?si=c-GCsRX3VoQMfn-2'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</AspectRatio>
				</Tabs.Panel>
				<Tabs.Panel value='messages1'>
					<AspectRatio ratio={16 / 9}>
						<iframe
							src='https://www.youtube.com/embed/mzJ4vCjSt28'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</AspectRatio>
				</Tabs.Panel>
				<Tabs.Panel value='settings1'>
					<AspectRatio ratio={16 / 9}>
						<iframe
							src='https://www.youtube.com/embed/mzJ4vCjSt28'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</AspectRatio>
				</Tabs.Panel>
			</Tabs>
		</Container>
	)
};
export default VideoSection;

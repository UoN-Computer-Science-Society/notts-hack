import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);

// Increase timeout for rendering complex scenes
Config.setDelayRenderTimeoutInMilliseconds(60000);

// Enable webpack caching for faster rebuilds
Config.setCachingEnabled(true);

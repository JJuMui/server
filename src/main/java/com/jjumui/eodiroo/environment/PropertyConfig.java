package com.jjumui.eodiroo.environment;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

@Configuration
@PropertySources(
    @PropertySource(value = "classpath:env.properties")
)
public class PropertyConfig { }

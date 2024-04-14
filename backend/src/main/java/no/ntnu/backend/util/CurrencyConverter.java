package no.ntnu.backend.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import no.ntnu.backend.model.CourseProvider;
import no.ntnu.backend.model.CurrencyConversionResponse;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class CurrencyConverter {

    @Value("${currency.api.key}")
    private String apiKey; // API key for fetching conversion rates

    @Value("${currency.api.url}")
    private String apiUrl; // URL for fetching conversion rates

    private Map<String, Double> conversionRates; // Cache for conversion rates
    private long lastUpdated; // Timestamp of the last update

    public List<CourseProvider> convertToCurrency(List<CourseProvider> courseProviders, String targetCurrency) {
        // Fetch conversion rates for all currencies
        fetchAllConversionRates();

        // Convert prices to the target currency
        for (CourseProvider courseProvider : courseProviders) {
            String baseCurrency = courseProvider.getCurrency();
            double conversionRate = conversionRates.getOrDefault(baseCurrency, -1.0);
            if (conversionRate != -1) {
                double convertedPrice = courseProvider.getPrice() * conversionRate;
                courseProvider.setPrice(convertedPrice);
                courseProvider.setCurrency(targetCurrency);
            }
            // Handle error case if conversion rate is -1
            // You can choose to skip conversion or log an error
        }
        return courseProviders;
    }

    private void fetchAllConversionRates() {
        // Fetch conversion rates for all currencies and store them in the conversionRates map
        // Implement logic to fetch conversion rates from an external API
        // Here we'll use the existing logic you provided
        if (conversionRates == null || System.currentTimeMillis() - lastUpdated > 3600000) {
            try {
                RestTemplate restTemplate = new RestTemplate();
                CurrencyConversionResponse response = restTemplate.getForObject(apiUrl + "?apikey=" + apiKey, CurrencyConversionResponse.class);
    
                if (response != null && response.getData() != null) {
                    conversionRates = response.getData();
                    lastUpdated = System.currentTimeMillis();
                } else {
                    // Handle error response from API
                    System.err.println("Error: Empty or invalid response received from currency conversion API.");
                }
            } catch (Exception e) {
                // Handle error fetching conversion rates
                System.err.println("Error fetching conversion rates: " + e.getMessage());
                e.printStackTrace();
            }
        }
    }    
}

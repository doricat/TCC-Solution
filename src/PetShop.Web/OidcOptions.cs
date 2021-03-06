﻿using System.Text.Json.Serialization;

namespace PetShop.Web
{
    public class OidcOptions
    {
        [JsonPropertyName("authority")]
        public string Authority { get; set; }

        [JsonPropertyName("client_id")]
        public string ClientId { get; set; }

        [JsonPropertyName("redirect_uri")]
        public string RedirectUri { get; set; }

        [JsonPropertyName("post_logout_redirect_uri")]
        public string PostLogoutRedirectUri { get; set; }

        [JsonPropertyName("response_type")]
        public string ResponseType { get; set; }

        [JsonPropertyName("scope")]
        public string Scope { get; set; }
    }
}
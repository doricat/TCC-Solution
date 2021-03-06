#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["src/PetShop.Web/PetShop.Web.csproj", "src/PetShop.Web/"]
COPY ["src/Web.Shared/Web.Shared.csproj", "src/Web.Shared/"]
COPY ["src/Infrastructure/Infrastructure.csproj", "src/Infrastructure/"]
RUN dotnet restore "src/PetShop.Web/PetShop.Web.csproj"
COPY . .
WORKDIR "/src/src/PetShop.Web"
RUN dotnet build "PetShop.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PetShop.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PetShop.Web.dll"]
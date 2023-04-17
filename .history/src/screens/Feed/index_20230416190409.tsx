import React, { useContext, useEffect, useMemo } from 'react';
import { FeedContext, FeedType } from '@/context/Feed';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import Card from '@/components/Card';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = () => {
  const {
    data,
    profilePicture,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    refetch,
    fetchNextPage,
    fetchProfilePicture,
  } = useContext(FeedContext);

  useEffect(() => {
    fetchProfilePicture();
  }, [fetchProfilePicture]);

  const renderItem = ({ item }: { item: FeedType }) => {
    return <Card feedItem={item} />;
  };

  const renderFooter = () => {
    if (!hasNextPage) {
      return <Text style={{ textAlign: 'center' }}>Não há mais posts.</Text>;
    }
    if (isFetchingNextPage) {
      return <ActivityIndicator />;
    }
    return null;
  };

  const refreshList = () => {
    refetch();
  };

  const loadNextPage = () => {
    if (!isLoading && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  };

  const flatListData = useMemo(() => {
    return data?.pages?.flatMap((page) => page.data) || [];
  }, [data]);

  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
        {profilePicture !== '' ? (
          <ProfilePicture source={{ uri: profilePicture }} />
        ) : (
          <ProfilePicture source={require('./images/defaultimage.jpg')} />
        )}
      </Header>
      <FlatList
        data={flatListData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
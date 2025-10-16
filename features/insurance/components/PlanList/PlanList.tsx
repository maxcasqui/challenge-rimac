import React, { useState, useRef } from 'react';
import { ScrollView, View, NativeSyntheticEvent, NativeScrollEvent, Dimensions, Platform } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import {
    PaginationContainer,
    CircleButton,
    PaginationText
} from './PlanList.styles';
import { PlanCard } from '../PlanCard/PlanCard';
import { Plan } from '../../types/Plan';

const { width: screenWidth } = Dimensions.get('window');

type PlanListProps = {
    plans: Plan[];
    onSelectPlan: (plan: Plan) => void;
    icons: any[];
};

export const PlanList: React.FC<PlanListProps> = ({ plans, onSelectPlan, icons }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<ScrollView | null>(null);

    const goToIndex = (index: number) => {
        const clamped = Math.max(0, Math.min(index, plans.length - 1));
        setCurrentIndex(clamped);
        scrollRef.current?.scrollTo({ x: clamped * screenWidth, animated: true });
    };

    const handleNext = () => goToIndex(currentIndex + 1);
    const handlePrev = () => goToIndex(currentIndex - 1);

    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const newIndex = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
        if (newIndex !== currentIndex) setCurrentIndex(newIndex);
    };

    return (
        <View>
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled={false}
                snapToInterval={screenWidth}
                snapToAlignment="center"
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                contentContainerStyle={{
                    paddingHorizontal: 0,
                }}
            >
                {plans.map((plan, i) => (
                    <View
                        key={i}
                        style={{
                            width: screenWidth,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 12,
                        }}
                    >
                        <View style={{ width: '100%', paddingHorizontal: 45 }}>
                            <PlanCard
                                name={plan.name}
                                price={plan.price}
                                description={plan.description}
                                icon={icons[i % icons.length]}
                                onSelect={() => onSelectPlan(plan)}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <PaginationContainer>
                <CircleButton onPress={handlePrev} disabled={currentIndex === 0}>
                    <ChevronLeft size={20} color={currentIndex === 0 ? '#ccc' : '#141938'} />
                </CircleButton>
                <PaginationText>
                    {currentIndex + 1} / {plans.length}
                </PaginationText>
                <CircleButton onPress={handleNext} disabled={currentIndex === plans.length - 1}>
                    <ChevronRight size={20} color={currentIndex === plans.length - 1 ? '#ccc' : '#141938'} />
                </CircleButton>
            </PaginationContainer>
        </View>
    );
};